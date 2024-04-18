<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Str;
use Faker\Generator;
use Hash;

class UserSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = app(Generator::class);
         User::create( [
            'name'         => 'Akhilesh',
            'email'             => 'Akhilesh@admin.com',
            'email_verified_at' => now(),
            'password'          => Hash::make('password'),
            'remember_token'    => Str::random(10),
        ]);

            for ($i = 1; $i < 11; $i++) {
                $admin = User::create([
                    'name'              => $i == 1 ? 'Prashant': $faker->firstname(),
                    'email'             => $i == 1 ? 'admin@admin.com' : $faker->unique()->safeEmail(),
                    'email_verified_at' => now(),
                    'password'          => Hash::make('password'),
                    'remember_token'    => Str::random(10),
                ]);

        }
    }
}