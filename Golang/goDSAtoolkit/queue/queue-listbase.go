package main

import "fmt"

// queue created using linkedlist

type Node struct {
	Data int
	Next *Node
}

type Queue struct {
	Front  *Node
	Rear   *Node
	Length int
}

// method for adding elemets into Queue

func (q *Queue) Enqueue(data int) {

	newNode := &Node{Data: data}
	q.Length++
	if q.Front == nil {
		q.Front = newNode
		q.Rear = newNode
		return
	}
	q.Rear.Next = newNode
	q.Rear = newNode
}

//method for removing elemet from front

func (q *Queue) Dequeue() (int, bool) {
	if q.Front == nil {
		return -1, false
	}
	dequeue := q.Front.Data
	q.Front = q.Front.Next
	q.Length--
	return dequeue, true

}

//method: display queue

func (q *Queue) Display() {
	if q.Front == nil {
		fmt.Println("Empty Queue")
		return
	}

	fmt.Print("Front <- ")
	for current := q.Front; current != nil; current = current.Next {
		fmt.Printf("%d ", current.Data)
	}
	fmt.Println("<- Rear")
}

// method for return Front data
func (q *Queue) Peek() (int, bool) {
    if q.Front == nil {
        return -1, false
    }
    return q.Front.Data, true
}
