import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty({
        description: 'Title (unique)',
        nullable: false,
    })
    @IsString()
    @IsNotEmpty()
    title: string;
}
