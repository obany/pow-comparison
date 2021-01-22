use std::time::{Instant};
use bee_pow::{
    providers::{MinerBuilder, Provider, ProviderBuilder},
};

fn main() {
    let num_workers = 12;
    let target_score = 4000.0;
    let mut size = 1024;

    println!("rust - workers {}, target score {}", num_workers, target_score);

    for _ in 0..10 {
        pow_run(size, target_score, num_workers);
        size += 1024;
    }
}

fn pow_run(size: usize, target_score: f64, num_workers: usize) {
    let miner = MinerBuilder::new().with_num_workers(num_workers).finish();
    let bytes = vec![0; size];

    let now = Instant::now();
    let nonce = miner.nonce(&bytes, target_score).unwrap();

    println!("size {}, duration {:.2}s, nonce {}", size, now.elapsed().as_secs_f32(), nonce.to_string());
}