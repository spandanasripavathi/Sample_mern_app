from fastapi import APIRouter

staff_router = APIRouter(prefix="/staff",tags=["staff"])


@staff_router.post("/addstaff")
def addstaff():
    return "add staff method called"


@staff_router.get("/getstaff")
def getstaff():
    return "get staff method called"


@staff_router.put("/updatestaff")
def updatestaff():
    return "update staff method called"


@staff_router.delete("/deletestaff")
def deletestaff():
    return "delete staff method called"