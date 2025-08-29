package main

func main() {

	var qu Queue

	qu.Enqueue(1)
	qu.Enqueue(2)
	qu.Enqueue(3)
	qu.Enqueue(4)
	qu.Enqueue(5)
	qu.Display()
	qu.Dequeue()
	qu.Display()
}
