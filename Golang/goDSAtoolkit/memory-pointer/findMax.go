package main

func findMax(nums []int) int {

	var max int = nums[0]
	for _, v := range nums {
		if max < v {
			max = v
		}

	}

	return max

	// complexity O(n)
}
