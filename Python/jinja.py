from jinja2 import Environment, BaseLoader
import json
from pydantic import BaseModel, Field

# 1. Define target structured output schema
class EntityExtractionSchema(BaseModel):
    entities: list[str] = Field(description="List of extracted organizations or people.")
    sentiment: str = Field(description="Overall sentiment: POSITIVE, NEGATIVE, or NEUTRAL.")

# 2. Production Prompt Template using Jinja2 syntax
PROMPT_TEMPLATE = """
You are an expert data extraction system.
Analyze the following text sample.

{% if historical_context %}
Historical Context to consider: {{ historical_context }}
{% endif %}

Text to analyze: {{ target_text }}

Return data EXCLUSIVELY matching this JSON schema layout:
{{ output_format }}
"""

def generate_production_prompt(text: str, history: str = None) -> str:
    # Setup Jinja2 environment
    env = Environment(loader=BaseLoader())
    template = env.from_string(PROMPT_TEMPLATE)
    
    # Render prompt safely Injecting schema definitions
    rendered_prompt = template.render(
        target_text=text,
        historical_context=history,
        output_format=json.dumps(EntityExtractionSchema.model_json_schema(), indent=2)
    )
    return rendered_prompt