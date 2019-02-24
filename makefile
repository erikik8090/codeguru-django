include makefile.variables
engine_jar := $(engine_dir)/console/corewars-risc-v.jar
static_dir := $(shell pwd)/codeguru/codeguru_app/static
engine_output := $(static_dir)/corewars_js $(static_dir)/WEB-INF

export ENGINE=$(engine_dir)
export RISC_V_AS=$(assembler)
export RISC_V_OBJ_COPY=$(obj_copy)
export RISC_V_CODE_GURU=$(engine_jar)

all: build-engine run-server
.PHONY: all

build-engine: $(engine_output)

$(engine_output): $(engine_dir)
	ant -Doutput.dir=$(static_dir) -Dbasedir=$(engine_dir) -f $(engine_dir)/build.xml gwtc console

run-server:
	python codeguru/manage.py runserver

migrate:
	python codeguru/manage.py migrate

clean:
	rm -rf $(engine_output)

