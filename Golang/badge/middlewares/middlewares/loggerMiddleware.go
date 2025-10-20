package middlewares

import (
	"log"
	"time"

	"github.com/gin-gonic/gin"
)

func LoggerMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {

		start := time.Now()
		ctx.Next() // process request

		duration := time.Since(start)
		path := ctx.Request.URL.Path
		method := ctx.Request.Method
		status := ctx.Writer.Status()

		log.Printf("Request %s | Method: %s | Status: %d | Duration: %v\n", path, method, status, duration)
	}
}
