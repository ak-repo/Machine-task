package main

// ### Tasks:

// 1. . Build a **simple web server** with Gin
// 2. Add `/api` **route group**
// 3. `/users` API that supports **GET** and **POST**

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	apiGroup := router.Group("/api")

	apiGroup.GET("/users", func(c *gin.Context) {

		c.JSON(http.StatusOK, gin.H{
			"message": "You are in GET method",
		})

	})

	apiGroup.POST("/users", func(c *gin.Context) {

		c.JSON(http.StatusOK, gin.H{
			"message": "You are in POST method",
		})
	})

	router.Run()
}
