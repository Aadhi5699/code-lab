public class SumArray {

  public static double sum(double[] numbers) {
    double sum = 0.0;
    if(numbers.length == 0 || numbers == null){
          return 0.0;
    }
    for(double number : numbers){
      sum += number;
  }
    return sum;
}
}

public class Counter {
    public static int countSheeps(Boolean[] arrayOfSheeps) {
      int count = 0;
      if(arrayOfSheeps.length == 0 || arrayOfSheeps== null){
        return 0;
        }
      for(Boolean sheep : arrayOfSheeps){
        if(sheep != null && sheep){
          count ++;
        }
      }
      return count;
    }
}