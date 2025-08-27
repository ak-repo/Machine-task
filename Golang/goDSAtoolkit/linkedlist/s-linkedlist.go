package main

import "fmt"

type Node struct {
	Data int
	Next *Node
}

type LinkedList struct {
	Head *Node
	Tail *Node
}

func (ll *LinkedList) Append(data int) {
	newNode := &Node{Data: data}
	if ll.Head == nil {
		ll.Head = newNode
	} else {
		ll.Tail.Next = newNode
	}
	ll.Tail = newNode
}

func (ll *LinkedList) Display() {
	if ll.Head == nil {
		fmt.Println("LinkedList is empty")
		return
	}
	current := ll.Head
	fmt.Print("Head -> ")
	for current != nil {
		fmt.Printf("%d -> ", current.Data)
		current = current.Next
	}
	fmt.Println("Nil")
}

func (ll *LinkedList) Delete(data int) bool {
	current := ll.Head
	var prev *Node

	if current == nil {
		return false
	}

	if current.Data == data {
		ll.Head = current.Next
		if ll.Head == nil {
			ll.Tail = nil
		}
		return true
	}

	for current != nil && current.Data != data {
		prev = current
		current = current.Next
	}

	if current == nil {
		return false
	}

	if current == ll.Tail {
		ll.Tail = prev
		ll.Tail.Next = nil
		return true
	}

	prev.Next = current.Next
	return true
}

func (ll *LinkedList) InsertAfter(nextTo, data int) bool {
	newNode := &Node{Data: data}
	current := ll.Head

	for current != nil && current.Data != nextTo {
		current = current.Next
	}

	if current == nil {
		return false
	}

	if current == ll.Tail {
		ll.Tail.Next = newNode
		ll.Tail = newNode
		return true
	}

	newNode.Next = current.Next
	current.Next = newNode
	return true
}
