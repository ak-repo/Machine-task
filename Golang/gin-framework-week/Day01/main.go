package main

import (
	"encoding/json"
	"net/http"
)

// struct for users
type User struct {
	Name string `json: "name"`
	Age  int    `json: "age"`
}

func PrintUser(writer http.ResponseWriter, request *http.Request) {
	if request.Method == "POST" {
		var user User
		json.NewDecoder(request.Body).Decode(&user)

		writer.Header().Set("Content-Type", "application/json")
		json.NewEncoder(writer).Encode(map[string]interface{}{
			"status": "user rececived",
			"name":   user.Name,
			"age":    user.Age,
		})

	}
}

// print hello
func PrintHello(writer http.ResponseWriter, request *http.Request) {

	if request.Method == "GET" {
		writer.Header().Set("Content-Type", "application/json")
		json.NewEncoder(writer).Encode(map[string]string{
			"message": "hello world",
		})
	}
}

func main() {

	http.HandleFunc("/api/hello", PrintHello)

	http.HandleFunc("/api/user", PrintUser)

	// it need to be call through
	// 	curl -X POST http://localhost:8080/api/user \
	//   -H "Content-Type: application/json" \
	//   -d '{"name":"Alice","age":30}'

	http.ListenAndServe(":8080", nil)
}
