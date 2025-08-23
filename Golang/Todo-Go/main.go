package main

import (
	"fmt"
	"strconv"
	"time"
)

// package level list
var todoList = map[int]string{}

var currentId int

func main() {

	var operation string

	for {
		fmt.Println("Welcome Sir\n Select The Given Below Operations ")
		fmt.Println(" 1 for Add new Todo\n 2 for Print todo \n 3 for Delete todo \n 4 for edit todo \n 5 for clear all todo ")
		fmt.Scan(&operation)

		switch operation {
		case "1":
			addTodo()
			time.Sleep(time.Second * 2)
		case "2":
			printTodo()
			time.Sleep(time.Second * 2)

		case "3":
			deleteTodo()
			time.Sleep(time.Second * 2)

		case "4":
			editTodo()
			time.Sleep(time.Second * 2)

		case "5":
			clearTodo()
			time.Sleep(time.Second * 2)

		default:
			goto done

		}
	}

done:
	fmt.Println("Thanks for using TODO ")

}

func addTodo() {
	currentId++
	var todo string
	fmt.Println("Enter Yoeu new todo")
	fmt.Scan(&todo)
	todoList[currentId] = todo
	fmt.Println("Todo Added successfully")

}

func deleteTodo() {
	var id string

	fmt.Println("enter id of delete todo")
	fmt.Scan(&id)
	res, _ := strconv.Atoi(id)
	if _, exist := todoList[res]; exist {
		delete(todoList, res)
		fmt.Println("deteted successfully")

	} else {
		fmt.Println("No todo found with that ID")
	}

}

func editTodo() {
	var id string
	var newTodo string
	fmt.Println("Enter id of which todo you want to edit ")
	fmt.Scan(&id)
	fmt.Println("Enter new Todo")
	fmt.Scan(&newTodo)
	res, _ := strconv.Atoi(id)

	if _, exist := todoList[res]; exist {
		todoList[res] = newTodo
		fmt.Println("Todo updated successfully")

	} else {
		fmt.Println("No todo found with that ID")
	}

}

func printTodo() {
	for i, v := range todoList {
		fmt.Printf("Id: %v  -> %v\n", i, v)
	}
}

func clearTodo() {
	clear(todoList)
	fmt.Println("Todo clear successful")
}
