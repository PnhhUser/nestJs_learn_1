import { EntityManager } from "typeorm";
import * as bcrypt from 'bcryptjs';
import { UserEntity } from "src/entities/user.entity";
import { faker } from '@faker-js/faker';

export const seedData = async (manager: EntityManager): Promise<void> => {

    await seedUser();


    async function seedUser() {

        const salt = await bcrypt.genSalt();
        const encryptedPassword = await bcrypt.hash('123456', salt);

        const userEntity = new UserEntity();
        userEntity.email = faker.internet.email();
        userEntity.username = faker.person.fullName();
        userEntity.phone = faker.phone.number();
        userEntity.password = encryptedPassword;

        await manager.getRepository(UserEntity).save(userEntity);
    }
}