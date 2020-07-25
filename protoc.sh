protoc services/auth/auth.proto -I=. --js_out=import_style=commonjs,binary:. --grpc_out=./ --plugin=protoc-gen-grpc=node_modules/grpc-tools/bin/grpc_node_plugin
protoc services/shared/shared.proto -I=. --js_out=import_style=commonjs,binary:. --grpc_out=./ --plugin=protoc-gen-grpc=node_modules/grpc-tools/bin/grpc_node_plugin
protoc services/plaidfinances/plaidFinances.proto -I=. --js_out=import_style=commonjs,binary:. --grpc_out=./ --plugin=protoc-gen-grpc=node_modules/grpc-tools/bin/grpc_node_plugin
protoc services/userfinances/userFinances.proto -I=. --js_out=import_style=commonjs,binary:. --grpc_out=./ --plugin=protoc-gen-grpc=node_modules/grpc-tools/bin/grpc_node_plugin
protoc services/financialcategories/financialCategories.proto -I=. --js_out=import_style=commonjs,binary:. --grpc_out=./ --plugin=protoc-gen-grpc=node_modules/grpc-tools/bin/grpc_node_plugin
protoc services/dataprocessing/dataProcessing.proto -I=. --js_out=import_style=commonjs,binary:. --grpc_out=./ --plugin=protoc-gen-grpc=node_modules/grpc-tools/bin/grpc_node_plugin
protoc services/webhooks/webhooks.proto -I=. --js_out=import_style=commonjs,binary:. --grpc_out=./ --plugin=protoc-gen-grpc=node_modules/grpc-tools/bin/grpc_node_plugin