#!/bin/bash

aws ssm put-parameter --name "/demo/param" --value $1 --type "String" --overwrite
