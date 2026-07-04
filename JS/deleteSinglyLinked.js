function deleteNode(llist, position) {
    // posititon = 3;
    // llist = 10 -> 20 -> 30 -> 40 -> 50
    if(position === 0){
        return llist.next
    }
    let current = llist;
     //(current)10 -> 20 -> 30 -> 40 -> 50
    for(let i=0; i<position -1 ; i++){
        current = current.next;
    //10 -> 20 -> (current)30 -> 40 -> 50
    }
    current.next= current.next.next
    //10 -> 20 -> 30 -> 50
     return llist;
}
