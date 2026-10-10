from pymongo import MongoClient
import os
from dotenv import load_dotenv
#CONNECTING with our mongodb connection
client=MongoClient(os.getenv("MONGO_URL"))
#CONNECTING with our database
db=client["vignan_db"]
#CONNECTING with collection
student_collection=db["students"]
staff_collection=db["staff"]