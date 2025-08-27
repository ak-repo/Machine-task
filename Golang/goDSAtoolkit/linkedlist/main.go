package main

func main() {

	// single linked list accessing

	var myList LinkedList
	myList.Display()
	myList.Append(30)
	myList.Append(60)
	myList.Append(70)
	myList.Append(1000)
	myList.Display()
	myList.Delete(60)
	myList.Display()

	myList.InsertAfter(70, 35)
	myList.Display()

}
