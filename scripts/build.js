#!/usr/bin/env node
"use strict";
var Path = require("path");
const fs = require("fs");

require("shelljs/global");
set("-e");

exec("dotnet build src/OpenApiGenerator/OpenApiGenerator.csproj");
exec(
	`ASPNETCORE_ENVIRONMENT=${process.env.ACCOUNT} dotnet run -p src/OpenApiGenerator/OpenApiGenerator.csproj`
);
