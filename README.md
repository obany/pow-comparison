# POW Comparisons for Chysalis Part 2

Comparing the different implementations of POW.

Tests performed on Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz - 12 Logical Processors

Go version built with `go build -ldflags "-s -w"`

Rust version built with `cargo build --release`

## Current Mainnet MWM 14

```shell
size 1024, duration 5.07s
size 2048, duration 4.11s
size 3072, duration 3.00s
size 4096, duration 5.07s
size 5120, duration 14.39s
size 6144, duration 3.73s
size 7168, duration 8.10s
size 8192, duration 3.98s
size 9216, duration 22.47s
size 10240, duration 18.64s
```

## Target Score 100

```shell
go - workers 12, target score 100.000000
size 1024, duration 0.01s, nonce 4611686018427389065
size 2048, duration 0.16s, nonce 9223372036854803531
size 3072, duration 0.05s, nonce 9223372036854785404
size 4096, duration 0.62s, nonce 9223372036854892330
size 5120, duration 0.01s, nonce 1537228672809130027
size 6144, duration 0.86s, nonce 3074457345618421685
size 7168, duration 1.05s, nonce 16909515400900620247
size 8192, duration 0.02s, nonce 4611686018427391282
size 9216, duration 0.02s, nonce 4611686018427391597
size 10240, duration 1.64s, nonce 13835058055282470469
```

```shell
rust - workers 12, target score 100
size 1024, duration 0.01s, nonce 4611686018427389065
size 2048, duration 0.30s, nonce 9223372036854803531
size 3072, duration 0.10s, nonce 9223372036854785404
size 4096, duration 1.35s, nonce 9223372036854892330
size 5120, duration 0.01s, nonce 1537228672809130027
size 6144, duration 1.75s, nonce 3074457345618421685
size 7168, duration 2.10s, nonce 16909515400900620247
size 8192, duration 0.04s, nonce 4611686018427391282
size 9216, duration 0.08s, nonce 4611686018427391597
size 10240, duration 3.26s, nonce 13835058055282470469
```

```shell
js - workers 1, target score 100
size 1024, duration 32.20s, nonce 76260
size 2048, duration 235.97s, nonce 411485
size 3072, duration 407.32s, nonce 262749
size 4096, duration 316.13s, nonce 741259
size 5120, duration 160.21s, nonce 361361
size 6144, duration 840.46s, nonce 1901719
size 7168, duration 1088.65s, nonce 2471831
size 8192, duration 267.74s, nonce 663223
size 9216, duration 738.17s, nonce 1779045
size 10240, duration 473.18s, nonce 1124210
```

## Target Score 1000

```
go - workers 12, target score 1000.000000
size 1024, duration 0.01s, nonce 15372286728091295154
size 2048, duration 2.45s, nonce 16909515400900866256
size 3072, duration 0.90s, nonce 16909515400900572728
size 4096, duration 4.28s, nonce 7686143364046434544
size 5120, duration 10.23s, nonce 16909515400902104101
size 6144, duration 17.58s, nonce 16909515400902830179
size 7168, duration 11.09s, nonce 16909515400901938544
size 8192, duration 1.26s, nonce 4611686018427558319
size 9216, duration 13.48s, nonce 4611686018429158385
size 10240, duration 19.72s, nonce 16909515400902825374
```

```shell
rust - workers 12, target score 1000
size 1024, duration 0.03s, nonce 15372286728091295154
size 2048, duration 4.49s, nonce 16909515400900866256
size 3072, duration 1.67s, nonce 16909515400900572728
size 4096, duration 10.99s, nonce 7686143364046434544
size 5120, duration 26.56s, nonce 16909515400902104101
size 6144, duration 36.32s, nonce 16909515400902830179
size 7168, duration 22.80s, nonce 16909515400901938544
size 8192, duration 2.66s, nonce 4611686018427558319
size 9216, duration 26.88s, nonce 4611686018429158385
size 10240, duration 36.28s, nonce 16909515400902825374
```

> JS Is too slow for this target score

## Target Score 4000

```shell
go - workers 12, target score 4000.000000
size 1024, duration 1.19s, nonce 7686143364045858546
size 2048, duration 5.84s, nonce 921795
size 3072, duration 0.83s, nonce 16909515400900572728
size 4096, duration 6.42s, nonce 16909515400901476116
size 5120, duration 84.58s, nonce 7686143364055780276
size 6144, duration 27.77s, nonce 1537228672812836235
size 7168, duration 69.07s, nonce 12297829382482483708
size 8192, duration 10.55s, nonce 4611686018428800033
size 9216, duration 116.92s, nonce 13800559
size 10240, duration 56.15s, nonce 15372286728098143908
```

```shell
rust - workers 12, target score 4000
size 1024, duration 2.17s, nonce 7686143364045858546
size 2048, duration 12.88s, nonce 921795
size 3072, duration 2.35s, nonce 16909515400900572728
size 4096, duration 17.75s, nonce 16909515400901476116
size 5120, duration 161.37s, nonce 7686143364055780276
size 6144, duration 60.96s, nonce 1537228672812836235
size 7168, duration 160.58s, nonce 12297829382482483708
size 8192, duration 21.72s, nonce 4611686018428800033
size 9216, duration 221.78s, nonce 13800559
size 10240, duration 106.74s, nonce 15372286728098143908
```

> JS Is too slow for this target score

