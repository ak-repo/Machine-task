package main

import "fmt"

func main() {
	var st Stack

	st.Push(1)
	st.Push(2)
	st.Push(3)
	st.Push(4)
	st.Push(5)
	st.Display()
	v, ok := st.Pop()
	if ok {
		fmt.Println("value: ", v)
	}
	st.Display()
	fmt.Println("length of stack:", st.Length)

	st.Push(50)
	t, u := st.Peek()
	if u {
		fmt.Println("Top value:", t)

	}

}
