# POW Comparisons for Chysalis Part 2

Comparing the different implementations of POW.

Tests performed on Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz

## Target Score 100

```shell
go - workers 12, target score 100.000000
size 1024, duration 0.01s, nonce 15372286728091295154
size 2048, duration 0.18s, nonce 9223372036854803531
size 3072, duration 0.07s, nonce 9223372036854785404
size 4096, duration 0.70s, nonce 9223372036854892330
size 5120, duration 0.01s, nonce 1537228672809130027
size 6144, duration 0.99s, nonce 3074457345618421685
size 7168, duration 1.17s, nonce 16909515400900620247
size 8192, duration 0.02s, nonce 4611686018427391282
size 9216, duration 0.02s, nonce 4611686018427391597
size 10240, duration 1.89s, nonce 13835058055282470469
```

```shell
rust - workers 12, target score 100
size 1024, duration 0.49s, nonce 4611686018427389065
size 2048, duration 10.94s, nonce 9223372036854803531
size 3072, duration 4.11s, nonce 9223372036854785404
size 4096, duration 60.36s, nonce 9223372036854892330
size 5120, duration 0.46s, nonce 1537228672809130027
size 6144, duration 94.55s, nonce 3074457345618421685
size 7168, duration 106.27s, nonce 16909515400900620247
size 8192, duration 2.23s, nonce 4611686018427391282
size 9216, duration 2.14s, nonce 4611686018427391597
size 10240, duration 186.69s, nonce 13835058055282470469
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
size 1024, duration 0.02s, nonce 15372286728091295154
size 2048, duration 2.63s, nonce 16909515400900866256
size 3072, duration 0.83s, nonce 16909515400900572728
size 4096, duration 4.26s, nonce 7686143364046434544
size 5120, duration 11.21s, nonce 16909515400902104101
size 6144, duration 18.34s, nonce 16909515400902830179
size 7168, duration 12.74s, nonce 16909515400901938544
size 8192, duration 1.32s, nonce 4611686018427558319
size 9216, duration 13.78s, nonce 4611686018429158385
size 10240, duration 18.51s, nonce 16909515400902825374
```

```shell
rust - workers 12, target score 1000
size 1024, duration 0.84s, nonce 15372286728091295154
size 2048, duration 235.71s, nonce 16909515400900866256
size 3072, duration 81.12s, nonce 16909515400900572728
size 4096, duration 437.97s, nonce 7686143364046434544
size 5120, duration 933.24s, nonce 16909515400902104101
size 6144, duration 1376.01s, nonce 16909515400902830179
... aborted as 6K required 23mins!!!
```

> JS Is too slow for this target score

## Target Score 4000

```shell
go - workers 12, target score 4000.000000
size 1024, duration 1.20s, nonce 7686143364045858546
size 2048, duration 6.16s, nonce 921795
size 3072, duration 1.17s, nonce 16909515400900572728
size 4096, duration 8.50s, nonce 16909515400901476116
size 5120, duration 81.49s, nonce 7686143364055780276
size 6144, duration 30.40s, nonce 1537228672812836235
size 7168, duration 72.22s, nonce 12297829382482483708
size 8192, duration 12.38s, nonce 4611686018428800033
size 9216, duration 112.13s, nonce 13800559
size 10240, duration 56.28s, nonce 15372286728098143908
```

> Rust Is too slow for this target score

> JS Is too slow for this target score

