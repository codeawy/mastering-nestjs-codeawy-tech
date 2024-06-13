import { SetMetadata } from '@nestjs/common';
import { SystemRoles } from 'src/guards/auth/roles/roles.enum';

export const Roles = (...args: SystemRoles[]) => SetMetadata('roles', args);
