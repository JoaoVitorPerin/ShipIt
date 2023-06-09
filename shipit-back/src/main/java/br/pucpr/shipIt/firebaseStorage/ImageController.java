package br.pucpr.shipIt.firebaseStorage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/upload")
public class ImageController {

    @Autowired
    IImageService imageService;

    @PostMapping("/salvar")
    public ResponseEntity<Image> create(@RequestParam(name = "file") MultipartFile file) {
        try {
            String fileName = imageService.save(file);
            String imageUrl = imageService.getImageUrl(fileName);

            // do whatever you want with that
            //return new ResponseEntity<>(file, HttpStatus.OK);
            Image image = new Image();
            image.setPath(imageUrl);
            return new ResponseEntity<>(image, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }


}
