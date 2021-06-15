package com.example.demo.util;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileUtil {

	 // Static method: three parameters: binary file, file path, file name
	 // This method will add the specified file in the specified directory	
	public static void fileUpload(byte[] file, String filePath, String fileName) throws IOException {
		 // Target directory		
		File targetFile = new File(filePath);
		if(!targetFile.exists()) {
			targetFile.mkdirs();
		}
		
		 // Binary stream write		
		FileOutputStream out = new FileOutputStream(filePath+fileName);
	    out.write(file);
	    out.flush();
	    out.close();
	}
}