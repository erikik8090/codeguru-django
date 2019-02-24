codeguru-django
===============

This is a browser wrapper and a server framework to the codeguru-engine. It is intended to be used in future codeguru competetions.

Getting Started
---------------
### Prerequisites:
You will need to install:

#### RISC-V GNU Toolchain
Follow the instructions here: https://gnu-mcu-eclipse.github.io/toolchain/riscv/install/

#### Codeguru Engine
The engine itself isn't a package yet, so you'll have to download the source code and link it to the build process in this repo. Clone the repo from [https://github.com/westerndigitalcorporation/corewars-risc-v](here). Save it wherever you'd like.

### Variables
This is optional, you can specify those environment variables manually when running the server.

In this repo there is a `makefile.variables` file. The variables inside it define the locations of the prerequisites mentioned above. It should look something like this (Linux):

``` makefile
engine_dir := ../corewars-risc-v
assembler := /usr/bin/riscv32-unknown-elf-as
obj_copy := /usr/bin/riscv32-unknown-elf-objcopy
```
### Running

#### Using makefile

Apply migrations

```sh
$ make migrate
```

Build engine

```sh
$ make build-engine
```

Run server

```sh
make run-server
```

You can build & run the server together through

``` sh
$ make # or
$ make all
```

#### Manually

Apply migrations
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

References
----------
https://codeguru.co.il/Xtreme/  
https://github.com/codeguru-il/corewars_riscv
https://github.com/YoavKa/corewars_riscv (disassembler)
https://github.com/kimwalisch/calculator (watch language)


