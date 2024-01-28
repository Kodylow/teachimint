use anyhow::Context;
use clap::Parser;
use tokio::net::TcpListener;
use tracing::info;
use tracing_subscriber::EnvFilter;

mod service;
mod opts;
mod ws;
mod error;
mod db;

use crate::service::Service;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    init_logging()?;

    dotenv::dotenv().ok();
    
    let opts = opts::Opts::parse();

    let service = Service::new(opts.clone())?;

    let listener = TcpListener::bind(&opts.listen_addr).await?;

    info!("Listening on {}", opts.listen_addr);
    axum::serve(listener, service.router).await?;

    Ok(())
}

fn init_logging() -> anyhow::Result<()> {
    let subscriber = tracing_subscriber::fmt()
        .with_writer(std::io::stderr) // Print to stderr
        .with_env_filter(
            EnvFilter::try_from_default_env().unwrap_or_else(|_| EnvFilter::new("info")),
        )
        .finish();

    tracing::subscriber::set_global_default(subscriber)
        .context("Failed to set tracing subscriber")?;

    Ok(())
}
