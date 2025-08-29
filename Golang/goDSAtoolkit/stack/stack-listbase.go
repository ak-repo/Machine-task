package main

import "fmt"

//stack based on linkedlist

type Node struct {
	Data int
	Next *Node
}

// stack
type Stack struct {
	Top    *Node
	Length int
}

// method for insrting elements into stack

func (s *Stack) Push(data int) {

	newNode := &Node{Data: data}
	s.Length++
	if s.Top == nil {
		s.Top = newNode
		return
	}

	newNode.Next = s.Top
	s.Top = newNode
}

//method for removing element form Top

func (s *Stack) Pop() (int, bool) {
	if s.Top == nil {
		return -1, false
	}
	popped := s.Top
	s.Top = s.Top.Next
	s.Length--

	return popped.Data, true
}

//method for displaying
func (s *Stack) Display() {
	if s.Top == nil {
		fmt.Println("Stack is empty")
		return
	}
	fmt.Println("Top")
	for current := s.Top; current != nil; current = current.Next {
		fmt.Println(current.Data)
	}
	fmt.Println("Bottom")

}

//method for showing top value
func (s *Stack) Peek() (int, bool) {
	if s.Top == nil {
		return -1, false
	}
	return s.Top.Data, true
}
