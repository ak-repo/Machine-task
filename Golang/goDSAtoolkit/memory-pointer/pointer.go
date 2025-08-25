package main

import "fmt"

func Pointer() {

	var x int = 300

	//pointer

	var y *int = &x

	fmt.Printf("Current state of X: %v and Y: %v\n", x, y)

	*y = 400
	fmt.Printf(" X: %v and Y: %v\n", x, y)

}
