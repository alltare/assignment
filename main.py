from typing import Union
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app=FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

templates=Jinja2Templates(directory="templates")

@app.get("/", reponse_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse(request=request,name="calculator.html")