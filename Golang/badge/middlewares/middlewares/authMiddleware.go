package middlewares

import (
	"log"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {

		// token
		auth := ctx.GetHeader("Authorization")
		if auth == "" {
			log.Println("unauthorised")
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "no token is given"})
			return
		}

		token := strings.Split(auth, " ")
		if token[0] != "Bearer" || len(token) != 2 {
			log.Println("unauthorised")
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "no token is given"})
			return
		}
		ctx.Set("token", token[1])

		ctx.Next()

	}
}
