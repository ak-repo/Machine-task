package main

import "fmt"

func main() {
	// slice or dynamic array

	var nums = []int{9, 8, 7, 6, 5, 4, 3, 2, 1, 0}

	// insert new element

	nums = append(nums, 13)
	fmt.Println("current num:", nums)

	// remove last and first item

	nums = nums[1:]

	nums = nums[:len(nums)-1]
	fmt.Println("current num:", nums)

	// add at middle of slice
	index := len(nums) / 2

	nums = append(nums[:index], append([]int{0}, nums[index:]...)...)
	nums[index] = 300 //new value adding
	fmt.Println("current num:", nums)

	// reversing

	end := len(nums) - 1
	start := 0

	for start <= end {
		nums[start], nums[end] = nums[end], nums[start]
		end--
		start++

	}
	fmt.Println("current num:", nums)

}
