package main

import (
	"log"
	"middleware-task/middlewares"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.New()
	r.Use(middlewares.LoggerMiddleware())

	r.NoRoute(func(ctx *gin.Context) {
		ctx.JSON(http.StatusNotFound, gin.H{"404": "no page found"})
	})

	pro := r.Group("/c")
	pro.Use(middlewares.AuthMiddleware()) // fixed name

	pro.GET("/one", func(ctx *gin.Context) {
		// Retrieve token set by AuthMiddleware
		v, exists := ctx.Get("token")
		if !exists {
			v = "not set"
		}

		ctx.JSON(http.StatusOK, gin.H{"Token": v})
	})

	pro.GET("/two", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{"message": "two"})
	})

	if err := r.Run(":8080"); err != nil {
		log.Fatal(err)
	}
}
