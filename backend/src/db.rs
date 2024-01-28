#![allow(dead_code)]

use std::path::PathBuf;
use std::sync::Arc;

#[derive(Clone, Debug)]
pub struct Database(Arc<redb::Database>);

impl From<redb::Database> for Database {
    fn from(db: redb::Database) -> Self {
        Self(Arc::new(db))
    }
}

impl Database {
    pub fn open(path: &PathBuf) -> anyhow::Result<Database> {
        Ok(Self::from(redb::Database::create(path)?))
    }
}

