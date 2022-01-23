#!/usr/bin/python3

print("content-type: text/html")
print()

import subprocess as sp
import json

b = sp.getoutput('sudo docker ps --format "{{.Image}}"').split('\n')
a = sp.getoutput('sudo docker ps --format " {{.Names}}"').split('\n')
k = list()
j = 0
while(j< len(b)):
    k.append(a[j] + " " +b[j])
    
    j += 1
k = json.dumps(k)
print(k)
