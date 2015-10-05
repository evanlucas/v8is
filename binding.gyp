{
  "targets": [{
    "target_name": "v8is",
    "include_dirs": [
      "<!(node -e \"require('nan')\")"
    ],
    "sources": [
      "src/binding.cc"
    ]
  }]
}
