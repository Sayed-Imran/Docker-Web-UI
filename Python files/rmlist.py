#!/usr/bin/python3

print("content-type: text/html")
print()

import subprocess as sp
import json
b = sp.getoutput('sudo docker ps --filter "status=exited" --format " {{.Image}}"').split('\n')
a = sp.getoutput('sudo docker ps --filter "status=exited" --format " {{.Names}}"').split('\n')
j = 0
k = []

while(j<len(a)):
    k.append(a[j] +" "+b[j])
    j += 1
k = json.dumps(k)
print(k)
