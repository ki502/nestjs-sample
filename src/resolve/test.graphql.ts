import { Query, Resolver } from "@nestjs/graphql";

@Resolver("Test")
export class TestResolver {
  @Query()
  async getAll() {
    return [
      {
        id: "1",
        name: "김진우",
        number: "+82 10-1234-5678",
        email: "ki509@naver.com",
      }
    ];
  }
}