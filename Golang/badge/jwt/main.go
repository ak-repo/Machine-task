package main

import (
	"errors"
	"fmt"
	"log"
	"time"

	"github.com/golang-jwt/jwt/v4"
)

type Config struct {
	Secret string
	Expire time.Duration
}

func GenerateToken(cfg *Config) (string, error) {

	claims := jwt.RegisteredClaims{
		ExpiresAt: jwt.NewNumericDate(time.Now().Add(cfg.Expire)),
		Subject:   "user",
	}
	tokenStr := jwt.NewWithClaims(jwt.SigningMethodHS256, &claims)
	return tokenStr.SignedString([]byte(cfg.Secret))
}

func ValidateToken(tokeStr string, cfg *Config) error {

	claims := jwt.RegisteredClaims{}

	token, err := jwt.ParseWithClaims(tokeStr, &claims, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("invalid sigining method")
		}
		return []byte(cfg.Secret), nil
	})

	if err != nil {
		return err
	}

	if !token.Valid {

		return errors.New("expired token")
	}

	fmt.Println("claims", claims)

	return nil

}

func main() {

	cfg := Config{
		Secret: "specialkey",
		Expire: time.Second * 10,
	}

	token, err := GenerateToken(&cfg)
	if err != nil {
		panic(err)
	}

	log.Println("token: ", token)

	time.Sleep(time.Second * 20)
	if err := ValidateToken(token, &cfg); err != nil {
		panic(err)
	}

	log.Println("token valid")

}
