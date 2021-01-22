package main

import (
	"context"
	"fmt"
	"time"

	"github.com/iotaledger/iota.go/pow"
)

func main() {
	numWorkers := 12
	targetScore := 4000.0
	size := 1024

	fmt.Printf("go - workers %d, target score %f\n", numWorkers, targetScore)

	for i := 0; i < 10; i++ {
		powRun(size, targetScore, numWorkers)
		size += 1024
	}
}

func powRun(size int, targetScore float64, numWorkers int) {
	payload := make([]byte, size)

	start := time.Now().UnixNano() / int64(time.Millisecond)
	nonce, err := pow.New(numWorkers).Mine(context.Background(), payload[:], targetScore)
	end := time.Now().UnixNano() / int64(time.Millisecond)

	if err != nil {
		fmt.Println("pow failed: %w", err)
	}

	fmt.Printf("size %d, duration %.2fs, nonce %d\n", size, float64(end-start)/1000.0, nonce)
}
