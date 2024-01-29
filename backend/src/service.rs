use axum::{http::{HeaderValue, Method}, response::IntoResponse, routing::get, Router};
use tower_http::{cors::CorsLayer, validate_request::ValidateRequestHeaderLayer};
use anyhow::Result;

use crate::{opts::Opts, ws::upgrade_ws, db::Database};

#[derive(Clone)]
pub struct Service {
    pub router: Router,
}

impl Service {
    pub fn new(opts: Opts) -> Result<Self> {
        let router = create_router(opts.clone())?;
        Ok(Self {router})
    }
}

#[derive(Debug, Clone)]
#[allow(dead_code)]
pub struct AppState {
    db: Database,
}

impl AppState {
    pub fn new(opts: &Opts) -> Result<Self> {
        let db = Database::open(&opts.db_path)?;
        Ok(Self {
            db
        })
    }
}

pub fn create_router(opts: Opts) -> Result<Router> {
    let state = AppState::new(&opts)?;
    let cors = CorsLayer::new()
        .allow_methods(vec![Method::GET, Method::POST])
        .allow_origin(HeaderValue::from_static("http://localhost:5172"))
        .allow_credentials(false);
    Ok(Router::new()
        .route("/ws", get(upgrade_ws))
        .with_state(state)
        .layer(cors)
        .layer(ValidateRequestHeaderLayer::bearer(&opts.password))
        .route("/", get(handle_index)))
}

pub async fn handle_index() -> impl IntoResponse {
    "Hello, world!"
}
