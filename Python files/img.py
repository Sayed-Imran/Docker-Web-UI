#!/usr/bin/python3

print("content-type: text/html")
print()

import subprocess as sp
import json

a = sp.getoutput("sudo docker images | awk '{print $1 \":\" $2}'").split('\n')[1:]
b = json.dumps(a)
print(b)
