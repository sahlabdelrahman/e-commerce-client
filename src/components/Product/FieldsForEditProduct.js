import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormContext } from "react-hook-form";
import ApiConfig from "../../services/apiConfig";
import Resizer from "react-image-file-resizer";

import { Input } from "../Form/Input";
import { SelectInput } from "../Form/Select";
import { UploadInput } from "../Form/UploadInput";

import { getCategories, getSubCategories } from "../../store/actions/category";
import { Badge, Grid } from "@mui/material";

import {
  brand_validation,
  category_validation,
  color_validation,
  description_validation,
  images_validation,
  price_validation,
  quantity_validation,
  shipping_validation,
  sub_category_validation,
  title_validation,
} from "../../utils/inputValidations/product";

export default function FieldsForEditProduct({
  data,
  selectDependToAnother,
  images,
  setImages,
}) {
  const dispatch = useDispatch();
  const { data: categories, subCategories } = useSelector(
    (state) => state.category
  );
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);

  const methods = useFormContext();
  const selectWatch = methods.watch("category");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectWatch) {
      dispatch(getSubCategories(selectWatch));
    }
  }, [dispatch, selectWatch]);

  useEffect(() => {
    setImages(data?.images);
  }, [setImages, data?.images]);

  const options = categories?.map((option) => ({
    value: option?._id,
    label: option?.name,
  }));

  const subCategoriesOptions = subCategories?.map((option) => ({
    value: option?._id,
    label: option?.name,
  }));

  const handleChangeInputUpload = (e) => {
    let files = e.target.files;
    if (files) {
      setIsLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            ApiConfig.post(
              "/upload-images",
              { image: uri },
              {
                headers: {
                  authtoken: token,
                },
              }
            )
              .then((res) => {
                setIsLoading(false);
                // images.push(res.data);
                setImages((prevImages) => [res.data, ...prevImages]);
              })
              .catch((error) => {
                setIsLoading(false);
                console.log(error);
              });
          },
          "base64"
        );
      }
    }
  };

  const handleRemoveImageUploaded = (public_id) => {
    setIsLoading(true);
    ApiConfig.post(
      "/remove-image",
      { public_id },
      {
        headers: {
          authtoken: token,
        },
      }
    )
      .then(() => {
        setIsLoading(false);
        const filteredImages = images.filter(
          (image) => image.public_id !== public_id
        );
        setImages(filteredImages);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <div>
      <Input {...title_validation} value={data?.title} />
      <Input {...description_validation} value={data?.description} />
      <Input {...price_validation} value={data?.price} />
      <SelectInput {...shipping_validation} value={data?.shipping} />
      <Input {...quantity_validation} value={data?.quantity} />
      <SelectInput {...color_validation} value={data?.color} />
      <Input {...brand_validation} value={data?.brand} />
      <SelectInput
        {...category_validation}
        options={options}
        value={data?.category?._id}
      />
      <SelectInput
        selectDependToAnother={selectDependToAnother}
        {...sub_category_validation}
        options={subCategoriesOptions}
        value={
          data?.subCategory?.length > 0
            ? data?.subCategory?.map(({ _id }) => _id)
            : []
        }
      />
      <UploadInput
        {...images_validation}
        isLoading={isLoading}
        handleChange={handleChangeInputUpload}
      />
      {/* Preview images */}

      {images?.length > 0 && (
        <Grid sx={{ mt: "10px" }} container spacing={2}>
          {images?.map((image) => (
            <Grid key={image.public_id} item xs={12} lg={4}>
              <Badge
                badgeContent="X"
                color="primary"
                sx={{ cursor: "pointer" }}
                onClick={() => handleRemoveImageUploaded(image.public_id)}
              >
                <img
                  src={image.url}
                  alt={image.public_id}
                  style={{ width: 100, height: 100, objectFit: "contain" }}
                />
              </Badge>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
