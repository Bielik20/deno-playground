import 'reflect-metadata';
import { Container, Injectable } from '@ns3/di';
import { UserRepository } from "@repo/libs/dal/user-repository.ts";

@Injectable()
class DependencyClass {
  name = 'implementation dependency';
}

@Injectable()
class MasterClass {
  name = 'implementation master';

  constructor(public dep: DependencyClass) {}
}

const container = Container.make();

const instance = container.get(MasterClass);
const instance2 = container.get(DependencyClass);

console.log(instance);
console.log(instance2);
console.log(instance.dep === instance2);

console.log(new UserRepository())