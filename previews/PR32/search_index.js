var documenterSearchIndex = {"docs":
[{"location":"examples/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"manual/#Manual","page":"Manual","title":"Manual","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"The PSRClassesInterface module provides interfaces to access data structured by PSR to be used in its models. Currently there are two main interfaces. ","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"The interface for studies. This interface is designed to read parameters from the files, some examples are deficit costs, fuel costs, currency, storage capacity etc.\nThe interface for reading and writing time series data. Time series data in the context of most studies have 4 dimensions (agents, stages, scenarios and blocks). Since studies of renewables with multiple agents, scenarios and stages can get quite big, we have designed different formats that are optimized to some objective (human readability, size, fast reading and writing, etc.).","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Both interfaces are defined as a set of methods that need to be implemented to make a different file format work. In this manual we will describe the abstract methods and give concrete examples of code to perform the work needed.","category":"page"},{"location":"manual/#Abstract-study-interface","page":"Manual","title":"Abstract study interface","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"PSRClassesInterface.AbstractStudyInterface\nPSRClassesInterface.initialize_study\nPSRClassesInterface.get_vector\nPSRClassesInterface.max_elements\nPSRClassesInterface.get_map\nPSRClassesInterface.get_parms\nPSRClassesInterface.get_code\nPSRClassesInterface.get_name\nPSRClassesInterface.mapped_vector\nPSRClassesInterface.go_to_stage\nPSRClassesInterface.go_to_dimension\nPSRClassesInterface.update_vectors!\nPSRClassesInterface.description\nPSRClassesInterface.total_stages\nPSRClassesInterface.total_scenarios\nPSRClassesInterface.total_blocks\nPSRClassesInterface.total_openings\nPSRClassesInterface.total_stages_per_year\nPSRClassesInterface.get_complex_map\nPSRClassesInterface.stage_duration\nPSRClassesInterface.stage_block_duration\nPSRClassesInterface.get_nonempty_vector","category":"page"},{"location":"manual/#PSRClassesInterface.AbstractStudyInterface","page":"Manual","title":"PSRClassesInterface.AbstractStudyInterface","text":"AbstractStudyInterface\n\n\n\n\n\n","category":"type"},{"location":"manual/#PSRClassesInterface.initialize_study","page":"Manual","title":"PSRClassesInterface.initialize_study","text":"initialize_study\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.get_vector","page":"Manual","title":"PSRClassesInterface.get_vector","text":"get_vector\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.max_elements","page":"Manual","title":"PSRClassesInterface.max_elements","text":"max_elements(data::AbstractData, collection::String)\n\nReturns a Int32 with the maximum number of elements for a given collection.\n\nExample:\n\nmax_elements(data, \"PSRThermalPlant\")\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.get_map","page":"Manual","title":"PSRClassesInterface.get_map","text":"get_map\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.get_parms","page":"Manual","title":"PSRClassesInterface.get_parms","text":"get_parms\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.get_code","page":"Manual","title":"PSRClassesInterface.get_code","text":"get_code(data::AbstractData, collection::String)\n\nReturns a Vector{Int32} containing the code of each element in collection.\n\nExample:\n\nget_code(data, \"PSRThermalPlant\")\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.get_name","page":"Manual","title":"PSRClassesInterface.get_name","text":"get_name(data::AbstractData, collection::String)\n\nReturns a Vector{String} containing the name of each element in collection.\n\nExample:\n\nget_name(data, \"PSRThermalPlant\")\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.mapped_vector","page":"Manual","title":"PSRClassesInterface.mapped_vector","text":"mapped_vector\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.go_to_stage","page":"Manual","title":"PSRClassesInterface.go_to_stage","text":"go_to_stage\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.go_to_dimension","page":"Manual","title":"PSRClassesInterface.go_to_dimension","text":"go_to_dimension\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.update_vectors!","page":"Manual","title":"PSRClassesInterface.update_vectors!","text":"update_vectors!\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.description","page":"Manual","title":"PSRClassesInterface.description","text":"description\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.total_stages","page":"Manual","title":"PSRClassesInterface.total_stages","text":"total_stages\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.total_scenarios","page":"Manual","title":"PSRClassesInterface.total_scenarios","text":"total_scenarios\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.total_blocks","page":"Manual","title":"PSRClassesInterface.total_blocks","text":"total_blocks\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.total_openings","page":"Manual","title":"PSRClassesInterface.total_openings","text":"total_openings\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.total_stages_per_year","page":"Manual","title":"PSRClassesInterface.total_stages_per_year","text":"total_stages_per_year\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.get_complex_map","page":"Manual","title":"PSRClassesInterface.get_complex_map","text":"get_complex_map\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.stage_duration","page":"Manual","title":"PSRClassesInterface.stage_duration","text":"stage_duration\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.stage_block_duration","page":"Manual","title":"PSRClassesInterface.stage_block_duration","text":"stage_block_duration\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.get_nonempty_vector","page":"Manual","title":"PSRClassesInterface.get_nonempty_vector","text":"get_nonempty_vector\n\n\n\n\n\n","category":"function"},{"location":"manual/#Abstract-reader-and-writer-interface","page":"Manual","title":"Abstract reader and writer interface","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"PSRClassesInterface.AbstractReader\nPSRClassesInterface.AbstractWriter\nPSRClassesInterface.AbstractReaderMapper\nPSRClassesInterface.AbstractFileType\nPSRClassesInterface.file_to_array\nPSRClassesInterface.file_to_array_and_header\nPSRClassesInterface.open\nPSRClassesInterface.is_hourly\nPSRClassesInterface.max_stages\nPSRClassesInterface.max_scenarios\nPSRClassesInterface.max_blocks\nPSRClassesInterface.max_blocks_current\nPSRClassesInterface.max_blocks_stage\nPSRClassesInterface.max_agents\nPSRClassesInterface.stage_type\nPSRClassesInterface.initial_stage\nPSRClassesInterface.initial_year\nPSRClassesInterface.data_unit\nPSRClassesInterface.current_stage\nPSRClassesInterface.current_scenario\nPSRClassesInterface.current_block\nPSRClassesInterface.agent_names\nPSRClassesInterface.goto\nPSRClassesInterface.next_registry\nPSRClassesInterface.close\nPSRClassesInterface.convert_file\nPSRClassesInterface.convert\nPSRClassesInterface.add_reader!\nPSRClassesInterface.write_registry\nPSRClassesInterface.array_to_file","category":"page"},{"location":"manual/#PSRClassesInterface.AbstractReader","page":"Manual","title":"PSRClassesInterface.AbstractReader","text":"AbstractReader\n\n\n\n\n\n","category":"type"},{"location":"manual/#PSRClassesInterface.AbstractWriter","page":"Manual","title":"PSRClassesInterface.AbstractWriter","text":"AbstractWriter\n\n\n\n\n\n","category":"type"},{"location":"manual/#PSRClassesInterface.AbstractFileType","page":"Manual","title":"PSRClassesInterface.AbstractFileType","text":"AbstractFileType\n\n\n\n\n\n","category":"type"},{"location":"manual/#PSRClassesInterface.file_to_array","page":"Manual","title":"PSRClassesInterface.file_to_array","text":"file_to_array\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.file_to_array_and_header","page":"Manual","title":"PSRClassesInterface.file_to_array_and_header","text":"file_to_array_and_header\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.open","page":"Manual","title":"PSRClassesInterface.open","text":"open\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.is_hourly","page":"Manual","title":"PSRClassesInterface.is_hourly","text":"is_hourly\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.max_stages","page":"Manual","title":"PSRClassesInterface.max_stages","text":"max_stages\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.max_scenarios","page":"Manual","title":"PSRClassesInterface.max_scenarios","text":"max_scenarios\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.max_blocks","page":"Manual","title":"PSRClassesInterface.max_blocks","text":"max_blocks\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.max_blocks_current","page":"Manual","title":"PSRClassesInterface.max_blocks_current","text":"max_blocks_current\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.max_blocks_stage","page":"Manual","title":"PSRClassesInterface.max_blocks_stage","text":"max_blocks_stage\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.max_agents","page":"Manual","title":"PSRClassesInterface.max_agents","text":"max_agents\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.stage_type","page":"Manual","title":"PSRClassesInterface.stage_type","text":"stage_type\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.initial_stage","page":"Manual","title":"PSRClassesInterface.initial_stage","text":"initial_stage\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.initial_year","page":"Manual","title":"PSRClassesInterface.initial_year","text":"initial_year\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.data_unit","page":"Manual","title":"PSRClassesInterface.data_unit","text":"data_unit\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.current_stage","page":"Manual","title":"PSRClassesInterface.current_stage","text":"current_stage\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.current_scenario","page":"Manual","title":"PSRClassesInterface.current_scenario","text":"current_scenario\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.current_block","page":"Manual","title":"PSRClassesInterface.current_block","text":"current_block\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.agent_names","page":"Manual","title":"PSRClassesInterface.agent_names","text":"agent_names\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.goto","page":"Manual","title":"PSRClassesInterface.goto","text":"goto\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.next_registry","page":"Manual","title":"PSRClassesInterface.next_registry","text":"next_registry\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.close","page":"Manual","title":"PSRClassesInterface.close","text":"close\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.convert_file","page":"Manual","title":"PSRClassesInterface.convert_file","text":"convert_file\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.convert","page":"Manual","title":"PSRClassesInterface.convert","text":"convert\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.add_reader!","page":"Manual","title":"PSRClassesInterface.add_reader!","text":"add_reader!\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.write_registry","page":"Manual","title":"PSRClassesInterface.write_registry","text":"write_registry\n\n\n\n\n\n","category":"function"},{"location":"manual/#PSRClassesInterface.array_to_file","page":"Manual","title":"PSRClassesInterface.array_to_file","text":"array_to_file\n\n\n\n\n\n","category":"function"},{"location":"#PSRClassesInterface-Documentation","page":"Home","title":"PSRClassesInterface Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Repository to read and write open-source formats for PSR models.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package is registered so you can simply add it using Julia's Pkg manager:","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add PSRClassesInterface","category":"page"}]
}
