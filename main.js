function Node(v = null, next = null) {
  return {
    value: v,
    next: next,
  }
}

function LinkedList(){
    return{
        head: null,
        append(value){
            let newNode = Node(value);
            if(this.head === null){
                this.head = newNode;
            } else {
                let tail = this.head;
                while(tail.next !== null){
                    tail = tail.next
                }
                tail.next = newNode;
            }

        },
        prepend(value){
            let newNode = Node(value, this.head);
            this.head = newNode;
        },
        size(){
            let count = 0;
            let current = this.head;
            if(current === null){return count}
            else {
                count++;
                while(current.next !== null){
                    count++;
                    current = current.next;
                }
                console.log('SIZE: ' + count);
                return count;
            }
        },
        tail(){
            let current = this.head;
            if(current == null){return null}
            else {
                while(current.next !== null){
                    current = current.next
                }
                console.log('TAIL: ' + current.value);
                return current;
            }
        },
        at(index){
            let count = 0;
            let current = this.head;
            if(current == null){return null}
            else {
                count++
                if(index === 1){console.log('AT ' + index + ': ' + current.value);return current.value}
                while(current.next && count != index){
                    current = current.next
                    count++
                }
                console.log('AT ' + index + ': ' + current.value);
                return current.value;
            }
        },
        pop(){
             let current = this.head;
             while(current.next.next){
                current = current.next;
             }
             current.next = null;
        },
        contains(value){
            let bool = false;
            if(this.find(value)){
                bool = true;
            }
            console.log('CONTAINS ' + value + ': ' + bool);
            return(bool);
        },
        find(value){
            let count = 0;
            let current = this.head;
            while(current){
                    if(current.value === value){
                        console.log('FIND ' + value + ': ' + count)
                        return count;
                    }
                    count++;
                    current = current.next;
            }
        },
        findHead(){
            console.log('HEAD: ' + this.head.value);
            return this.head;
        },
        toString(){
            let current = this.head;
            let str = '';
            while(current){
                str = str + '( ' + current.value + ' ) -> ';
                current = current.next
            }
            str = str + '( null )';
            console.log(str);
            return str;
        }
    }

}

const list = LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.toString();