corewars_js - RISCV
===========


[![Build Status](https://travis-ci.com/westerndigitalcorporation/corewars-risc-v.svg?branch=master)](https://travis-ci.com/westerndigitalcorporation/corewars-risc-v)

This is a fork of corewars8086 Javascript engine + debugger that uses RISC-V assembly instead of x86.

 Getting Started
--------
 ### Prerequisites:
You will need to install:
#### Apache Ant:
For windows, follow the instructions in here: https://www.mkyong.com/ant/how-to-install-apache-ant-on-windows/
For mac or linux, use your package manager.
#### RISC-V GNU Toolchain
Follow the instructions here: https://gnu-mcu-eclipse.github.io/toolchain/riscv/install/

 ### Installing
 #### Setup GWT
 First, to install `ivy` - the dependency manager for this project run the following:
```sh
ant bootstrap
```
Run the test suite for GWT:
```sh
ant test
```
 To build:
```sh
ant gwtc console
```
#### Run Django
Go to the war directory  
FIrs, apply migrations:
```sh
manage.py migrate
```

Then you can run the server with:
```sh
manage.py runserver
```

To create a superuser for running the tournaments:
```sh
manage.py createsuperuser
```

Run the test suite for the server:
```sh
manage.py test
```

 ## Licence
This project is licensed under the GPL v3.0 License - see the LICENSE file for details

 References:  
---------- 
https://codeguru.co.il/Xtreme/  
https://github.com/codeguru-il/corewars_riscv  
https://github.com/YoavKa/corewars_riscv    (disassembler)   
https://github.com/kimwalisch/calculator  (watch language)   


