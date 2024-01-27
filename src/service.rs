
use askama::Template;
use axum::{http::{Response, StatusCode}, response::IntoResponse, routing::{get, post}, Router};
use tower_http::validate_request::ValidateRequestHeaderLayer;
use tracing::info;


use crate::{opts::Opts, ws::upgrade_ws};

#[derive(Clone)]
pub struct Service {
    pub router: Router,
}

impl Service {
    pub fn new(opts: Opts) -> anyhow::Result<Self> {
        let router = create_router(opts.clone());
        Ok(Self {
            router,
        })
    }
}

#[derive(Debug, Clone)]
pub struct AppState {}

impl AppState {
    pub fn new(_opts: &Opts) -> Self {
        Self {}
    }
}

pub fn create_router(opts: Opts) -> Router {
    let state = AppState::new(&opts);
    Router::new()
        .route("/ws", get(upgrade_ws))
        .with_state(state)
        // .layer(cors)
        .layer(ValidateRequestHeaderLayer::bearer(&opts.password))
        .route("/", get(handle_home))
        .route("/styles.css", get(styles))
        .route("/teacher", post(handle_teacher))
        .route("/student", post(handle_student))
}

async fn handle_home() -> impl IntoResponse {
    LoginTemplate
}

async fn handle_teacher() -> impl IntoResponse {
    TeacherTemplate
}

async fn handle_student() -> impl IntoResponse {
    StudentTemplate
}

pub async fn styles() -> impl IntoResponse {
    Response::builder()
        .status(StatusCode::OK)
        .header("Content-Type", "text/css")
        .body(include_str!("../templates/styles.css").to_owned())
        .unwrap()

}

#[derive(Template)]
#[template(path = "index.html")]
struct LoginTemplate;

#[derive(Template)]
#[template(path = "teacher.html")]
struct TeacherTemplate;

#[derive(Template)]
#[template(path = "student.html")]
struct StudentTemplate;
