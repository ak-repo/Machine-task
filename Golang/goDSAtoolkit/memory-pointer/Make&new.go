package main

import "fmt"

func allocation() {

	// make

	x := make([]int, 5, 10)
	x[0] = 200
	fmt.Println("X:", x)

	//new

	y := new([]int)
	*y = []int{20}
	*y = []int{333}

	fmt.Println("Y: ", y)

}
