import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";
import { MOCK_SUBJECTS } from "./constants";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord > 
  ({ resource }: GetListParams)
  : Promise<GetListResponse<TData>> => {
          if (resource === 'subjects') {
            return {
              data: MOCK_SUBJECTS as unknown as TData[],
              total: MOCK_SUBJECTS.length,
            };
          }
          return {
            data: [] as TData[],
            total: 0,
          };
        
  },
  getOne: async () => { throw new Error("Method not implemented."); },
  create: async () => { throw new Error("Method not implemented."); },
  update: async () => { throw new Error("Method not implemented."); },
  deleteOne: async () => { throw new Error("Method not implemented."); },
  getApiUrl: () => 'https://api.fake-rest.refine.dev',
}