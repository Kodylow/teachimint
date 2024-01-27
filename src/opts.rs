use std::path::PathBuf;

use clap::{arg, command, Parser};

#[derive(Parser, Clone, Debug)]
#[command(author, version, about, long_about = None)]
pub struct Opts {
    #[arg(long, short, env = "LISTEN_ADDR", default_value = "[::1]:3000")]
    pub listen_addr: String,

    #[arg(long, env = "REDB_FILE", default_value = "db.redb")]
    pub db: PathBuf,

    #[arg(long, env = "DEBUG_DELAY")]
    pub debug_delay: bool,

    #[arg(long, env = "PASSWORD", default_value = "password")]
    pub password: String,
}
